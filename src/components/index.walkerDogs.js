import { Button } from "@mui/material";

export default function IndexWalkerDogs() {
  const imagen =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaGhgYGBoYHBgYGRoaGBgZGhoYGhkcIS4lHB4rHxoYJjonKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA4EAABAwIEAwYGAgIBBAMAAAABAAIRAyEEEjFBBVFhBiJxgZHwEzKhscHR4fFSckIUFWKCM0Oi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAgEQADAQACAwEBAQEAAAAAAAAAAQIREiEDMUFRE2Fx/9oADAMBAAIRAxEAPwDSUmItjVFTaiGBXEJGhPCauhYA5dC4uhAHQuhcC6EAdTk0LqAOpEqJ9UAShalYneApV5ZkpMOgw1An/HbZVLHF1pRjcOCNffguWvK69llCRNUxIBhROxk6Ksc0tcQT4dUbRo7qbodSSjEEoihmcdfFVmNrZRlGqtMA8ZAViesGsQSMKNyVW46oxk9+42Os+SssRUhhI5LGcVe4d4CTOm5/yP4WsVaWlLiLCYLpPXklintcO460LIYzHQ4l7C2OlvXluu0+MsLJzlp8bDy59U3LAws6/Fa9A2uzYEW+idhe3LAYrNy9WiQqh+LZUEZ58Rf1Wa41hHCeYvrqFWbb+iVOfD1Kn2wwbv8A7QPEEfhH4TjWHqGGVGuPIFfPrK6PwmPc3SQRoQVXlRPEfQiaSvHsD2xxLBZ+b/e6usF29qH/AORjSObJB9Ctfk69GqT0N9UBNbXCzFPjbaglpPgRBXG8Sg6rmrz1uFV4lhrm1AnEArP4XiE7q3oVpSryMHCHVaKr6zFcNQ2KpWldPi8u9MlU/hS/DSRORJdJIcwKUJjAnrGA5dC4E4LAOhOCaE4LQOhQ4jEhtpE7BDcV4mygwue4TsJuTyWcwfE88vcdbwJPkp3fFDzOmsw7i65dA9EU6nIs4eIusb/3d7nR8rdBsVNgq8VAGPMkzEmx3kLlfkr9LKUag4Mc5G6hxFAC3uyKc+BM9VEBnudFGh5KjFscwFzbxPorTAGWhx3CE4lVEBg1NvVHU2Brfp79Eq7GYPxTKQJ1lE0MobCznaPFkZQP8h798la8IdnaDOo+qxezWuh1akC8/RAsxjqLsrx3Nj47FH8TpuYQ9twJnwM3980MzFMqtOYDl4c0Z8YJhmG4kx2hB/KILKbx8olUD+GMzS1+U+g1BP2KloU3s0eHC0f3zTptf6K0mWGJ4Q0tIsRG45brMcU7FU3/ACAsN9OZGsLU4fEPESEe1wdsnmhGmeDcZ4JiMM+SCWXAcJOaPBSYbjDHNyP7vI6keq9uxmBY9uUgEHw038F5n2r7EBuZ9IW/xAJ+p18FTpi9oxXE8DkcHiC11wRcHqP0hmPui6OIdTDmPGZh1adjzHIofFYYsdOrXXadiP2qJ/GI1+Ema2qdSqkKBjkiYK3DNNd2exmaAbXid1dY+k5hF5BAIKx3AKsPF7StvJqjzA9Fz+SfheGQYLFEFavh+IkBAcP4OI0RzKeQrH4XM8jeSbxF5Qep3CQq6i9G03pZeMykBVKVykjS1cXV/QjxK5qcmgpy6SQ4JwUbnACSYCpeKdp6FId1we7kwg+p2WOkvZqWl3WrtY3M9waBuTAWN7TdrmZSyg4k7uFvQrK8a4++s4lxts0aDy/Kz1bEk2Uat10h1OFvgA+tU7ziQLuc4kwBrcq1xHG6bHZBoLAqrwD20qLi7V341noq7h2Bfiq0MEDfoJ1sotcnnxDp8V/rL1mNq13htMH/AGGi3XZ/hQpAPfLn/wCRJT+D8HZQY0NAsAJ0Om/MK0a0k3sB9UtYvQ60nBzHMdBsfv1QPEuLEHIy7joNv6Sx+KJIYzU2/lVeMcKbDBzOJgu6m37UWtHXQ7C1B8USZcZ8ir8VbX3B6LNcDwQz/EdmgD1doRbTmrvE4gRbbY25j34pvSD2ylx72urEGwDdOsn9LvB+KBrnUy67TpuQdD9FWYB5qYio53yzA8gI/Kg7S020x8Rlni4I3E79LpFI2noNHEhwg6crHVAVeFFveYQRrBtssVw3tkyQH90wDf7ff0V+ztKxxgO9dL/jZDbXTQJb2jvEcK8ti7f48EPgzUY67yRy11vr4StNgqgcL3mZn038VVcVo/Dc14HdO3Ob+/FNiaM17hZYaqd9feisWqowNaQJ10gbftW9IhYmY0Ti9vzsuVqIcLjVOiycHQnTEw8n7c9lcmarTFrlzefUXWOwDmvb8N5AB+VxJ12g7fYyvfeK4UPYWncbLw3tJws4esRo1xka2PK6rNb0K19KitScxxa7UKMuVq2KrNO8wAHqNiFV1aeWyonpNrCy4K689d16r2VwIdRD9ZcY8l5Nwg3Ftyvcez1INw1Mad0HzN1K3lItPoNp0wAq3Gaqye6AqTGVe9CrfkTgSZaoOoPVjScqOk9WOGeuJPsvSDZSTMy4ujGSAgosXi2U2F7zAHqegUgKy3ac5yYPyCI5EiZXXdcVpCVrKTjvaV9Ulje6zkNT4n8LM1nmb/RR1axE85QpqyVHt9sdvCSs6VHgcKXvA5fjdRuei6TzTZI+appOgaD+T9kekHtjeLYkPfkjK1nd6mFvewnBWsZnOYudESALdCLwsv2R4eKlXM4d1voXePReq02iwv8Af7JG+KwZLXpM0Xj7j3KkfpA1SB9d9l17gBJ8lJ9lEV2Nc2mwkXNz4mJABWfwgfiKkOIyau33+3UK4xNMvMnr4IGhiWseWDeD7v8AdLPs1+gvFvcxsMb8ujefu/qs2OPPeSx7MhGs9RqOm62tMtjptcafi6Gx3BqNYXGV0ats4c1jS3sZPooOFFjTmkGToPfuUuLuZUY4Rpz8dUXhuyIpkxVc5t7EXHnPJS47hIynLrFuu/8ACx/9BGO4ZwkYhgDWTFiSLefJaDhXZMUn5nGeQF7+5+ituH5KVMBsAWv01vCio8YYahZNwJ8dbLXYKS7ouDRHkR5R+0W9rKjcjrj6+Ky2L4kBpcnQAX6n30TMLxWvMClA2JdJjnZZoYaRvD8l229jb19UZQqEWNlVUcTWMSzSDOYET097Iz4p/wCbHN5pWaWjCPX7pA+H5QdLEt5x9EVnkWWqtEaweSsV244S2qwn/kLzyWwY+ReyreMUwWOHQplXehh4ZhXlrwHGL5XTpyKJx+FmekrvG8NkeTEd4/wQpsO6WxrYfpdKf0k18G8CpwQD7BXuOCbDGDk1v2Xl/Zjh4e9jTuRHgDJuvV6jIUb7Y89LCOq2QqnF4XdWxco3slL7Q66KBr4MKywj0JjMMQZCKwLLI8cN0bdJSWCS4ku/gcvIqRigqHitQB5J+V7Y/wDYbekKbMVBjaBewt3junkdkeRbJZRhgeL0oeevLZUz3wVp+KUgRO4tfYixCzdekpSydodQYXua0bkBEcQMudE92GtjpYJcNGWXbgGPGITsNTzOY0iZfJ8tEV7MldHofY3BZKTZ1IkzOpvIlaph1n+/HdVPCAAwW2ARufZQb0qlgbTPl1/hcqkkiI6QPf3UVF+1vQz909pjX6x9t0rNRBirCCOvdEac7qqp4DO8PIgjffS0lWrm5jFteungu4rKxp/f4WL9GZXYziTGDvHLHPU/r6oHDceY4910bRcEjz1QVWox7o23FrXtropjg2dI5+7Slf6xkW7OJjSdR9tdPJSsxIcNbHrvO/os67hoAlriDqLmLfwh8Njnh2R9nN0Osg2Jj6ow01GIY3KdB9LXWTZgyKz6gPIR4ePWR5K0djTlI1989VBSqj4MnWCT9Z+6VBg7hbC4ve4HkCeQvb0PoUXjOKU8OMz3Aemu49/3HwogUhMfLP8AtOn1P1Wf7W4bNlcbwbgbDmfGfqnmexafRc4ftxRmc4m5g+gHp+VfYPtKxxBzAk3u4b8mtmV4xjsPyA+p8PfsD4fFvbZroHK8COR2V/5projzx9n0PT4qxwDrO8QAOZFyimYpj4sQen7XgWAxj3Gz3mY0c4CZ1gaq2wnEa1NweHvE6guD7X5yUleNjKkeyYkFvfbDmoTiT+5m2hZjgHbTOclZgDtMwmCNvm+xKsX49uZzARleJZefL1UnOMonqPNO0x7zjBuRqZ0K5hhZhExG/wBQie0FH5raT0Q/Z+Htyk3mG+d1dPpEmu8PRewOCzOdVOjZaOUnWPBbTENUHBsA2hSbTbsJJ5k3JRdUWSezd7K8rkrryuNWIc6+mCmNZCnYVHWCt4ax4TtaclJDfFSXWR4soAxPDFKGruVYdJk+0HD2hxds/wCjh+1i8TTyuj3K9ex3CDVpkaHVp5EaLzDieHIJEQ5syOu6g8VdE7QFRMAjc2+oUuFqRVZOg19VFh3Cb7fjVH8HwoqtruOrA1zenedIS17Fk9C4bXGQZdwjM3sCVnuDVpYOX19+StWVADaffMqPosuy3bUEW/KiqYg+PKJP0QjqxgCJOg6koulTazvOILuZkAdBdY+zfRK2m6LDLPMoDFYBryM7iembKPWRKH4p2haye+B/+fDmslxTtsDZtyPT15rVDZjrDXtwNFkZWgcjYg+fNNxODa8EN8QWmI6QvN2cfxD3g5oB2kn1J1W34FxPOwB/dcLOufztf6rKhr2E1vo5hnljhTcZmYJ3A8VFxCnmIc2zgZ5c/wCURxqhnZYw4GQT4W9+KouGcSzgh+rQeumv4SJMfUEUsVmMC0xOxHj1/SdxR+Vjo0g9LD3dVGJxWTEA3hwjnf3KLxmJztyxYzbknUg6DeD4+abJANhO128ufNR8ZxBe0taf8ugkG8+XuyyeCxbqTsjvlkkee0ox/EZiLnxubyL+cKnHsnyTRU4t5BcCYBPvXyQeFp5jtzM7Dr0U2JwzpLgZB/vRFYfDyyNLx9vuFVdIj7YxnE3MEMj/AGIEn/1/v7zIzjNdusHxYBPTQWUtFrGuzvktBuGwXQDENm2gt4K+o8aaxop2cxwGsd0u3IPIAz5J1KYrbTKunxBlXYMeLiCY0vB2R2F4i9r2Ek90jfZVXEMIxzi9vdgkEt0JgkEdLfVSOp5QIJncHmp1KKTTNdj8FnJi+a87QQq7gnZyuyu0ZCWOI740AnXoQtR2fw+emwkXIE+5WxwlMNEBc6p5hektLFgsPBLVNp/KnsNlpIrqwgprApMa26hYVn0deghq69shNangpkBWVKVykjjTSVv6AUgansZJTWCSrCnhYHVWquKM0dmsFiO2fBCSa9MSYh7RuP8AJbGoCEFWrrkdd6GHjTKRLwAN/utJ2JYM1dhvcDyv+k/tDwttGoKjPkeXGP8AExNuiG7G1D8eryLcx8Q6B9ynb1CJYy34c/I57DsSPJG/GmY281W41+WvOztU3H1iy+a0SFJr0WRqMBUGUvNokD9rH9oe0LnkhhhoMZjrPQaojGcZyYcNHzERM2k/fXyWKc5ru84w0Wtv+1SZ1k6rB1eqHXu8nUmSgKwja3opHYpxswW6AfhcqvMQ9p6Egj+wq4R0kwb/AAt9fBavg2NDQA7ynpMeH9rEEwbfRHYfGXg3i4MmEtzo0VhvanEoF+ceoEaWJ005rM4ME1nuGh5WF/4QNbiDi2PAfiVe8Ip5GBxBvHlopceKKcuTC6eCa4DNeDvrf9WT34drTAN/4BQtbFEXB73pF/7Q+Ix7ee3oYhKkx+h9agx/zAX52v8Az+VS4nhobdpkXm+nuEYMcHO1CkNTeeUxvpdUTaEaTK5jSBqI8fPTyC42oC1r9IMG20wJVm2gx9t42112UH/bHsPd7zNS3p6aplS+iOX8K+qe84c+8PPX6pgYT71VxX4ex8G46EQR4KN2AY03cY5ZpJj/AMRdMm/hjS+kOFY51tQLdJNj6Nkox4zubuC7TfW3qonVwW5GgMYLGdT5bf0nYeoM7RHpcLKeSxoXKkeqcGafhMdEQYjl6q+pvPMKg7MhzqJkxoR+Va0H3jdc0rpFr9stKJsU5hQ2GfZykpvlMyeEr6WcIF1EtN1Y/HATXkPC3ATaBGrsphMJj6sLcAlzJIT46SMGAMI+8lWZqyFTcO76s3HKE/lrsX6Q4irGqqcc8EKbF1pVTiaxXJVdlUin4zUNVhZ/zbdvXaPSU3szw11Jj3vEPfAjcNHPqoeKugB41b9lZ4PGZ2A9FaabknUpMhx9LNdD8Rph9A2gxzKs3szMBHX1UFVoNOPHRM+kMjzyriHEZSdEPWY5xaIgaA8+ZReNo5Hm266YcIm4u0/jxkBXl6tRz0seMjw7soI9PBWWCx7BLalNr2XLYAzyY1J1FrcpPNU75Gtikx/iT0T70Ji3SXHUGQHsENOxuQf0hKLQLlWNNhyhpgkx1UYwBc7LNtZSb+jtfhHhqeZw1yz7lX765AjQREewE3B4NrLA/Y/RQYuoB5c4nw5/0pU+TKSuKA8diiLNuTb1QjMG91yeWl9VJQYXPnc6A+v1Vxw2u18iCHN1b78FRLETb1lVT4S4g94g7ePVRupVGf8AkB+LK+Y8tD7GQCRYnZQYCsHUgCe9r+z75ID0V+E4kJv9TAH73VvhuKN3jYfgcoWcr4N2cwIkp3/T1G3idVlSmaqaNoa1N4AtMbR5aFB4vhxiWOt/idPJUlDibmGHsI8vyFa4fjIO/LU9en8JONT6H5TRW1WPB7wIneNfApmHrRUaBt01WgGNY8XAvrpBH4Oun4QOL4OA4PpzBkkG4bvIO4Wt6sZsrGmj0vs3iO4ANx11Rza0a6g/VYDgnGnU4DiPPb8rZYVweAdZMypT0sZWlr0vKD+6OqmBPKybhhAARYCR02xfRG1wGoUzCDonNaE17QEyFZXY+plKqX4guNkXxi7ghKbIV5nTZQrpJ2ZJUwYmwDGsZlBE7qSu+yEqtaQqbE8ULDl1MgDrJXLXKvYqQbiG31VfjaFpRj3kfMLayFHUe3y3UeI+mJ7RVy1h6oDhHEiG5VYdtWANBF2k7bHkVksE8yAF1eOVxIXT5HpHDsZnYRMR5nyChpUyS4uJ1tIVXwTElj8pnvfdXeLaWgELanoaXpn+MYGQSB4LNAxZb+uM9MOi6x2Jwhc50WIm2koh50wud7QN8Y/5T/sAfqniuI+UeMQEJGUwRdFYKmHGXaXgDUqrZFILwlEuJdtvP6VpRa0belh+kA/FNAtYDp5oKtjXu+WY+wU2myiaktsXjWNaemnLyCosZinP+UWO/wBJ8VylQLyMxmfO3II6mwD5BYa62nb7rVKQrpsrsHXcz+U7E40GoHskGAHdSrGnQLDMfrW/5U5fRqCHsDHDR4t68k4pFUxxzjk9sGZAtr90LSwD2vaA+WE2yn6HlrdFYljshDnNOWCIvp1HTxUFVpYGlhc6ReAYEjUeiALKu1gAa1osLnWTEk8+ajZQab5zptzOkoGjWAEOP7CssM9mxmbxFvI+aVo2SDEUrQ8zcw6ABAIG2myg/wCl1AGaJvyHOVeMDHA2E9dJ5G3jdRMwTWyILHGYFojzS6PmlVUwb23bO1pRXDOKEZmuHQ3iTOh5q64RwB79SehII+hWgw/YulOZ5M7pkmzVLXoyLKzTbKCNQLkx76LW9ksSXPyG1pF1bU+z2Hbo1G4LA06ZlgusrxNoZai2YyFM14QHxkw1ki8DNfZYmpCgqYhBurKB1VOvCZgzFOzOTA1SghSCFVTg2gqSKgJLcDShFZxH1VXWw5L8xExcDqrxlMBSsotWcEYVlOq82ITRg3GYV6yk3kpmADZJ/KQMoezRewtdcO1lT4PsVRZci61LSpE6lIxopBwCiI7miPZgWARkCLJUbnrcNIm4NkRkbHKAg8Twag8yabZ5i32Vg16e4SjijTJcV7EUajSGTTd0uPAzeFk+M9nKuHYTq1u7TzsdV6uGxuo8RQa4FrmgtOxEhY5RjlM8KaB/yPkp9QAwADc7eAW5412KY85qPddqWPJIPgVlK+FqUX5HsynS+l95Gu6SkScteyCnSy5Yu42HTbfxR9Bsd3QtF7QDc7je65gKLWw8mXXmRprbXdT13DKAT3jIsB4k2sNrRuUhoNRZlkOJmTpt0UD8KCZvfXoed0ZUa8GXAc4tOuo3hNa6b+HqmFaBGYBoEx3r3015jQhC4epkJb5SeW0qyqvEex6ciql1B73ksa484vaEwrDvitd8wB/fNcdkG0eeh6IE0ajB3mOHWP0uU8RIN/Gfp+FmG6XdPK4GW385PmFouAYDNBuWAf8AKD+NlW8D4M+plce60aHpyW4wzAxoaNkTOlZQcwgCwhP+Khc8roVRx7n3XRUUWVIhAEz6qj+Oo3BQ5kAFF6bKjaU5ADsy6KiYmuQYTfESQuZJAETHqVrkMxEsag0nY9SscogF3Mg0Ja9ONRC5lwvQYEOqpuaUMHKVqDSZqeHqMJwQA6ZTgo8y6HIAc4BB4vCMf87A48yjQEmsWYYZzFdmqD/+OU8wdPLQqJnZNoghwMaSLaRMLS/DErr2rHKDEZXEdky6SKgn/W1tugQGI7H1A05Xg+XitsGc10vIFtEcUZxR5LjOB4locfhuI5gToeSrK5xDGgFr2AiwMtnQT1XtzXcwq/HcHpVZL2Bxt9NFnER+NHj2GpV3wAHOnYTf0Wg4V2YJdNUCRBysuDOxdtA8V6PRwTWABrQAAB1gWF08YYDQIw1QkB0GBoDQAANgpBTRQw6eKSccFaxSAKcU134aAIWhOhPyrsIAGe1CvKOe1DPYgwjYVMCoCE5rkATFRPKReonvQB2UkNnSQA6kUUwrqSAJgVwriS0YULuVcSWAPDU8BJJADgnJJIAULqSSAHNUgKSSDBALrkkkAMTSkkgBuVSNakkgDpC5lSSQA5KUkkAcTSUkkANlczLqSAGuKieEkkAQuaonWSSQYyJz0PUekkgUHzpJJIGP/9k=";
  return (
    <main
      className="flex flex-col items-center  "
      style={{ backgroundColor: "rgba(239, 239, 239, 1)" }}
    >
      <section
        className="w-4/5 h-12 my-2 flex flex-col justify-center rounded-lg"
        style={{
          backgroundColor: "rgba(5, 29, 91, 1)",
        }}
      >
        <h1 className="text-center text-white text-2xl font-bold ">My Pets</h1>
      </section>
      <section className="grid md:grid-cols-2 justify-items-center w-3/4 gap-10">
        <div className="w-4/5 md:w-full flex flex-col  items-center bg-white mb-2 rounded-lg">
          <h3 className="text-2xl">Thomas</h3>
          <img src={imagen} alt="Pug" className="rounded-full h-24 w-24" />
          <h3 className="text-2xl font-semibold">Description:</h3>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Dog Breed</h3>
            <p className="text-lg text-center">Pug</p>
            <h3 className="text-xl font-semibold text-center">Gender</h3>
            <p className="text-lg text-center">Male</p>
          </div>
          <div className="w-11/12 my-4">
            <Button variant="contained" size="medium" fullWidth color="inherit">
              <h3 className="text-zinc-500 font-semibold text-lg">
                Take Out Dog
              </h3>
            </Button>
          </div>
        </div>
        <div className="w-4/5 md:w-full flex flex-col  items-center bg-white mb-2 rounded-lg">
          <h3 className="text-2xl">Thomas</h3>
          <img src={imagen} alt="Pug" className="rounded-full h-24 w-24" />
          <h3 className="text-2xl font-semibold">Description:</h3>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Dog Breed</h3>
            <p className="text-lg text-center">Pug</p>
            <h3 className="text-xl font-semibold text-center">Gender</h3>
            <p className="text-lg text-center">Male</p>
          </div>
          <div className="w-11/12 my-4">
            <Button variant="contained" size="medium" fullWidth color="inherit">
              <h3 className="text-zinc-500 font-semibold text-lg">
                Take Out Dog
              </h3>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
